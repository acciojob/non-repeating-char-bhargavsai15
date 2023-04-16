//your JS code here. If required.
let input=prompt();
let arr={};
for(let i=0;i<input.length;i++){
	if(arr[input.charAt(i)]!=undefined){
		arr[input.charAt(i)]=arr[input.charAt(i)]++;
	}else{
		arr[input.charAt(i)]=1;
	}
}

for (let i = 0; i < input.length; i++){
  if (arr[input.charAt(i)] == 1) {
    console.log(input.charAt(i));
    break;
  }
}

