let array_x=[-3,5,1,3,2,10];
let max=array_x[0];
let save_position;

for (let i=1; i<array_x.length;i++){
    if(array_x[i]>max){
        max=array_x[i];
        save_position=i;
    }
}
alert('So lon nhat trong mang la so '+max+'. Tai vi tri array_x['+save_position+']');