
// Option 1: import the whole class and later create the instance car customerDetails
import { CustomerDetails } from "./helpers/printHelper.js";

var customerDetails = new CustomerDetails()
customerDetails.printFirstName('Steve')
customerDetails.printLastName('Smith')


// Option 2 Create the instance in the printHelper.js file and import it to your working file. It is a cleaner way for importing.
// then you call the object, that represents the instance of your class and call the methods from it to use it
import { cleanCustomerDetails } from "./helpers/printHelper.js";

cleanCustomerDetails.printFirstName('Martha')
cleanCustomerDetails.printLastName('Smith')