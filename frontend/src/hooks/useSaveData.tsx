import axios from "axios";
import swal from 'sweetalert';

const useSaveData = () => {
    const handleStoreData = (url: string, data:Object) => {
        axios.post(url, data)
        .then((res) => {
            if(res.data.success){
                swal("Great!", res.data.message, "success")
            }else{
                swal("Opps!",res.data.error, "error")
            }
            console.log(res.data);
        })
        .catch((err) => console.log(err))
    }
    return handleStoreData
};

export default useSaveData;