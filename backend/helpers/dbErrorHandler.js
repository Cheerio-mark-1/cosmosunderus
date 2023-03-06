const getErrorMessage = (err) => {
    let message = ''
    // error that are not 
    console.log(err);

    if (err.code) {
        switch (err.code) {
            // for dupblicate entry
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err)
                // message = err
                break;
            default:
                message = 'Something went wrong'
        }
    } else {
        // iterate over the error message 
        // if is validator error 
        for (let errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message
            }
        }
    }
    return message
    // return err
}

// error that are NOT thrown because of mongoose validator violation will contain an associated error code
const getUniqueErrorMessage = (err) => {
    let output
    try {
        // let fieldName =
        //     err.message.substring(err.message.lastIndexOf('.$') + 2,
        //         err.message.lastIndexOf('_1'))

        let fieldName =
            err.message.substring(err.message.lastIndexOf('index: ') + 7,
                err.message.lastIndexOf('_1'))

        console.log(fieldName);
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already Exists'

    } catch (error) {
        output = 'Unique Field already exists'

    }
    return output
}


module.exports = { getErrorMessage }
