"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserInterface_1 = require("./UserInterface");
class View {
    constructor() {
        this.games = [];
        this.playablegame = [];
    }
    startApp() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setOptionsForUi({
                type: 'select',
                name: 'value',
                message: 'App is started. What do you want to do?',
                choices: [
                    { title: 'search TextAdventure', description: 'You can search with title name', value: 'searchForTextAdventure' },
                    { title: 'show TextAdventures', value: 'showTextAdventures', description: 'Display the TextAdventures' },
                    { title: 'login', value: 'login', description: 'If you have alraedy an account' },
                    { title: 'registration', value: 'registration' },
                ],
                initial: 0
            });
            return this.sendResponse(this.uiOptions);
        });
    }
    searchForTextAdventure() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setOptionsForUi({
                type: 'autocomplete',
                name: 'value',
                message: 'Type the titles of TextAdventures',
                limit: 1,
                choices: this.loadChoices(),
                style: 'default',
            });
            return this.sendResponse(this.uiOptions);
        });
    }
    setOptionsForUi(uioptions) {
        this.uiOptions = uioptions;
    }
    sendResponse(uiOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let uiTask = new UserInterface_1.UserInterface(this.uiOptions);
            return uiTask.response();
        });
    }
    loadChoices() {
        let temporaryChoices = [];
        this.games.forEach(element => {
            let obj = { title: element.gameTitle, value: element.gameTitle };
            temporaryChoices.push(obj);
        });
        return temporaryChoices;
    }
    getgamesDataFromModel(games) {
        this.games = games;
    }
    getPlayableGameFromModel(playableGame) {
        this.playablegame = playableGame;
    }
}
exports.View = View;
//# sourceMappingURL=DisplayMessage.js.map