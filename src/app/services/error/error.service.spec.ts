import {
    TestBed,
    getTestBed
} from '@angular/core/testing';

import { ErrorService } from '.';

describe('ErrorService', () => {
    let errorService: ErrorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ErrorService
            ]
        });
        errorService = getTestBed().get(ErrorService);
    });

    describe('Update message', () => {
        beforeEach(() => {
            errorService.updateMessage('Error', 'Error test');
        });

        it('should update error message', () => {
            expect(errorService.error.title).toEqual('Error');
            expect(errorService.error.message).toEqual('Error test');
        });

        it('should clear error message', () => {
            errorService.clearMessage();
            expect(errorService.error).toBeUndefined();
        });
    });
});
