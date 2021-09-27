let arr = [4,5,6,7,9,12];
function duplicate_values(arr)
{
    arr_res = [];
    arr.sort();    
    for (let i=1; i < arr.length; i++) {                   
        if (arr[i] == arr[i-1]) {
            let is_unique = true; 
            for (let k=0; k < arr_res.length; k++) {
                if (arr_res[k] == arr[i]) {
                    is_unique = false;
                    break;
                }
            }
            if (is_unique) {
                arr_res.push(arr[i]); 
            }
        }            
    }
    return arr_res;
}
if (duplicate_values(arr) == ''){
	console.log('False')
}else{
	console.log('True')
}