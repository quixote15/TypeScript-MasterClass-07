"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Data Transfer Object (DDD) - Padrao para transferencia de dados entre arquivos
 */
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email Enviado to " + to.name + ": " + message.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
