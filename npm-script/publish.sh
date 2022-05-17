NEW_VERSION=$1
CURRENT_REPOSITORY=$(pwd)
REMOTE_PUBLISH_ARG="origin"
BRANCH_PUBLISH_ARG="stable"

C_IMPORTANT='\033[0;31m'
C_HIGHLIGHT='\033[0;36m'
C_BOLD='\033[1m'
C_DEFAULT='\033[0m'

# UTILITY FUNCTIONS
function fatal {
    (>&2 echo "⟹$C_IMPORTANT  FATAL ERROR$C_DEFAULT :\n"$1)
    exit 0
}

function fatalUsage {
   (>&2 echo "⟹$C_IMPORTANT  FATAL ERROR$C_DEFAULT :\n"$1)
    echo "USAGE: npm run tag #.#.# (where #.#.# is your new version number)"
    exit 0
}

##
## MAIN FUNCTIONS
##

function checkPatchSubpart {
    SPLIT_NEW_SUBPART=($(echo $SPLIT_NEW_NUM | tr "-" " "))
    SPLIT_EXISTING_SUBPART=($(echo $SPLIT_EXISTING_NUM | tr "-" " "))
    SPLIT_NEW_NUM=${SPLIT_NEW_SUBPART[0]}
    SPLIT_EXISTING_NUM=${SPLIT_EXISTING_SUBPART[0]}
    IFS='-'
    read -ra IS_NEW_ALPHA <<< "$NEW_VERSION"
    read -ra IS_EXISTING_ALPHA <<< "$EXISTING_VERSION"

    if [ -z ${IS_NEW_ALPHA[1]} ] && [ -z ${IS_EXISTING_ALPHA[1]} ]; then
        if [ $SPLIT_NEW_NUM -lt $SPLIT_EXISTING_NUM ]; then
            fatal "New version number can't be inferior to previous one ($NEW_VERSION < $EXISTING_VERSION)"
        elif [ $SPLIT_NEW_NUM -eq $SPLIT_EXISTING_NUM ]; then
            fatal "New version number can't be equal to previous one ($NEW_VERSION < $EXISTING_VERSION)"
        fi
    elif [ ! -z ${IS_NEW_ALPHA[1]} ]; then
        if [ $SPLIT_NEW_NUM -lt $SPLIT_EXISTING_NUM ]; then
            fatal "For alpha versions patch number can't be inferior or equal to previous one ($NEW_VERSION < $EXISTING_VERSION)"
        fi
    elif [ ${IS_NEW_ALPHA[1]} -lt ${IS_EXISTING_ALPHA[1]} ] || [ ${IS_NEW_ALPHA[1]} -eq ${IS_EXISTING_ALPHA[1]} ]; then
        fatal "For alpha versions alpha number can't be inferior or equal to previous one ($NEW_VERSION < $EXISTING_VERSION)"
    fi
}

function checkVersionSubpart {
    SPLIT_NEW_NUM=${SPLIT_NEW_VERSION[$VERSION_ID]}
    SPLIT_EXISTING_NUM=${SPLIT_EXISTING_VERSION[$VERSION_ID]}

    if [ $VERSION_ID -eq 2 ]; then
        checkPatchSubpart
    elif [ $SPLIT_NEW_NUM -lt $SPLIT_EXISTING_NUM ]; then
        fatal "New version number can't be inferior to previous one ($NEW_VERSION < $EXISTING_VERSION)"
    fi
}

function checkVersion {
    if [ -d $NEW_VERSION ]; then
        fatalUsage "Missing version number."
    fi

    EXISTING_VERSION=$(git describe --abbrev=0 --tags)
    SPLIT_NEW_VERSION=($(echo $NEW_VERSION | tr "." " "))
    SPLIT_EXISTING_VERSION=($(echo $EXISTING_VERSION | tr "." " "))
    VERSION_IDS=(0 1 2)

    for VERSION_ID in "${VERSION_IDS[@]}"
    do
        checkVersionSubpart
    done
}

function checkLocalGitChanges {
    if [ ! -d ".git" ]; then
        fatal "$CURRENT_REPOSITORY is not a git repository"
    fi

    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD || fatal "Cannot get the current branch")
    if [ "$CURRENT_BRANCH" != "$BRANCH_PUBLISH_ARG" ]; then
        fatal "$CURRENT_BRANCH is not equal to $BRANCH_PUBLISH_ARG on $CURRENT_REPOSITORY. Used -b option to target an other branch"
    fi
    LOCAL_CHANGES=$(git status -suno || fatal "Cannot check the current changes")

    if [ -n "$LOCAL_CHANGES" ]; then
        fatal "You have local changes on $CURRENT_REPOSITORY"
    fi
}

function checkPushPermissions {
    if git push $REMOTE_PUBLISH_ARG $BRANCH_PUBLISH_ARG
    then
        echo ""
    else
        fatal "You have no right to create a new version"
    fi
}

function versionApplication {
    npm version --no-git-tag-version --tag-version-prefix="" $NEW_VERSION;
}

function buildAndPublishApplication {
    ng build --prod && publishApplication;
}

function publishApplication {
    git commit -am $NEW_VERSION;
    git tag -am "$NEW_VERSION" $NEW_VERSION;

    git push $REMOTE_PUBLISH_ARG $BRANCH_PUBLISH_ARG;
    git push $REMOTE_PUBLISH_ARG $BRANCH_PUBLISH_ARG --tags;

    npm publish;
}

##
## MAIN CALLS
##

checkVersion
checkLocalGitChanges
checkPushPermissions
versionApplication

# To remove when JIRA will be able to handle publish
buildAndPublishApplication
