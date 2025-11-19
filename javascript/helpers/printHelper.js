export function printAge(age){
    console.log(age)
}

export class CustomerDetails {
    
    printFirstName(firstName){
        console.log(firstName)
    }
    
    printLastName(lasttName){
        console.log(lasttName)
    }
}


class CleanCustomerDetails { // Class name is written with a capital letter
    
    printFirstName(firstName){
        console.log(firstName)
    }
    
    // for a cleaner code and understanding you can write a method description using /** 
    /**
     * This method will print the last name.
     * @param {string} lasttName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

export const cleanCustomerDetails = new CleanCustomerDetails()