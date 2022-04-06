module.exports = Add;

function Add(numberOne, numberTwo, log){

    var result = numberOne + numberTwo;
    log(result)
    return result;
    
}

/*
function isAlive(ping){
    var pingOneSuccess = ping();
    var pingTwoSuccess = ping();
    var pingThreeSuccess = ping();

    if(pingOneSuccess && pingTwoSuccess && pingThreeSuccess){
        return true;
    }
    return false;
}
*/