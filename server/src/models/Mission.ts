import pkg from 'mongoose';
const { Schema, model } = pkg;

interface Mission{
    category:string,
    description:string,
    done : boolean,
    userId:string
}

const missionScheme = new Schema<Mission>({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    userId:{
        type:String,
        required:true,
    }
},
    {
        timestamps: true
    }
);

export default model('Mission', missionScheme)