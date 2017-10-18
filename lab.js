function fibb(a){
	if (a==1){
		return 1;
	}
	else if (a==0){
		return 1;
	}
	else {
		return fibb(a-1)+fibb(a-2);
	}
}
function InsertionSort(a){
	var i,key,j;
	for (var i=1; i<a.length; i++){
		key=a[i];
		j=i-1;
		while(j>=0 && a[j]>key){
			a[j+1]=a[j];
			j=j-1;
		}
		a[j+1]=key;
	}
}
function printarr(a){
	InsertionSort(a);
	for (var i=0; i<a.length; i++){
		console.log(a[i]);
	}
}