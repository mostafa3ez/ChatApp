import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
    const noChatSelected = true;    
    return (
        <div className='md:min-w[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> :(
                <>
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>
                        <span className='text-gray-900 font-bold'>Omar Samir</span>
                    <Messages />
                    <MessageInput />

                    </div>
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected =() =>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-xl md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Mostafa Ezz 🍓  </p>
                <p>Select chat to start conversation</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};


// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
    
//     return (
//         <div className='md:min-w[450px] flex flex-col'>
            
//             <>
//                 {/* Header  */}
//                 <div className=' bg-slate-500 px-4 py-2 mb-2'>
//                     <span className='label-text'>To:</span>
//                     <span className='text-gray-900 font-bold'>Omar Samir</span>
//                 </div>
//                 <Messages />
//                 <MessageInput />
//             </>
//         </div>
//     )
// }

// export default MessageContainer