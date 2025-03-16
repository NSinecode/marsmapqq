function stringyfy(a){
    let grad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>|,.-#+!$%&/()=?*_:;'
    let s = ''
    for ( let j = 0; j < 3; j++ ) {
        s += grad[Math.round((a[j]/255)*grad.length)]
    }
    return s
}

function IsMaximum(a,i,j){
    let q = true
    for(let ii = i-1; ii < i+1; ii++){
        for ( let jj = j-1; jj < j+1; jj++ ) {
            if((ii > 0) &&  (jj > 0) && (ii < a.length) &&  (jj < a[ii].length) && (ii != i) &&  (jj != j)){
                if (a[ii][jj] > a[i][j]){
                    q = false
                }
            }
        }
    }
    return q;
}

function calclocalmaximum(a){
    let maxis = []
    for(let i = 0; i < a.length; i++){
        for ( let j = 0; j < a[i].length; j++ ) {
            if (IsMaximum(a,i,j)){
                maxis.push([i,j])
            }
        }
    }
    return maxis;
}


export default function Home() {
    
    let a = [
        [7,3,4],
        [4,6,3],
        [2,5,6]
    ]
    let s = [
        stringyfy(a[0]),
        stringyfy(a[1]),
        stringyfy(a[2])
    ]

    return (
        <div className="text-s">
            <div>{s[0]}</div>
            <div>{s[1]}</div>
            <div>{s[2]}</div>
            <div>{calclocalmaximum(a)}</div>
        </div>

    );
}