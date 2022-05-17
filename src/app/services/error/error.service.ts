import { Injectable } from '@angular/core';

export interface Error {
    'title': string;
    'message': string;
}

@Injectable()
export class ErrorService {
    private _error: Error;

    public updateMessage(title: string, message: string): void {
        this._error = {
          'title': title,
          'message': message
        };
    }

    public clearMessage(): void {
        this._error = undefined;
    }

    get error(): Error {
        return this._error;
    }
}
