const Login = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  <span className='text-blue-500'>BFCAI</span>
            </h1>
            <form>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" 
                placeholder="Enter username" 
                className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <div>
                  <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                  </label>
                  <input type="password" 
                  placeholder="Enter password" 
                  className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <a href="#" className='text-sm hover:underline  hover:text-blue-600 mt-2 inline-block'>
                  {"Don't"} have an account?
                </a>
                <button className="btn btn-block btn-neutral">Login</button>
                </form>
          </div>      
        </div>
};

export default Login;
//Starter code for this file
// const Login = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  <span className='text-blue-500'>BFCAI</span>
//             </h1>
//             <form>
//               <div>
//                 <label className='label p-2'>
//                   <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" 
//                 placeholder="Enter username" 
//                 className="input input-bordered input-info w-full max-w-xs" />
//                 </div>
//                 <div>
//                   <label className='label p-2'>
//                     <span className='text-base label-text'>Password</span>
//                   </label>
//                   <input type="password" 
//                   placeholder="Enter password" 
//                   className="input input-bordered input-info w-full max-w-xs" />
//                 </div>
//                 <a href="#" className='text-sm hover:underline  hover:text-blue-600 mt-2 inline-block'>
//                   {"Don't"} have an account?
//                 </a>
//                 <button className="btn btn-block btn-neutral">Login</button>
//                 </form>
//           </div>      
//         </div>
// };

// export default Login;
