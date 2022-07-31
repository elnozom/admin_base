import Api from '@/utils/axios/Api';

const Http = Api.getInstance();


export const Upload = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post('upload' , payload , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}




export const Delete = (payload:any) => {
    return new Promise((resolve, reject) => {
        Http.delete(`delete/${payload.table}/${payload.id}`)
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}



export const DeleteFile = (path:string) => {
    return new Promise((resolve, reject) => {
        Http.post('delete/file' , {Path : path})
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}


export const Counts = () => {
    return new Promise((resolve, reject) => {
        Http.get('counts').then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}