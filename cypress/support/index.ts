import 'cypress-mochawesome-reporter/register';
import "cypress-localstorage-commands";
import { MemoVoidIteratorCapped } from 'cypress/types/lodash';

declare namespace Cypress{

    interface Chainable {
        baseUrl: ("https://mc-stage.livello.com/"),
        invalidLogin: (username: string, password:string) => void,
        validLogin: (username: string, password: string) => void,
        logout: () => void,
        example:() => void,
        login:() => void,
        
    
    
    
    }
    

}
