export class GreenhouseResponse {
    httpStatusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        this.httpStatusCode = statusCode;
        this.message = message;
    }
}
