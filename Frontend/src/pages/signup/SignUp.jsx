import GenderCheck from "./GenderCheck";

const SignUp = () => {
    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
              <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-blue-500'>BFCAI</span>
                </h1>
                <form>
                  <div>
                    <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" 
                      placeholder="Enter Full Name" 
                      className="input input-bordered input-info w-full max-w-xs" />
                  </div>
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
                  <input type="text" 
                    placeholder="Enter Password" 
                    className="input input-bordered input-info w-full max-w-xs" />
                  </div>
                  <div>
                  <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                    </label>
                  <input type="text" 
                    placeholder="Confirm Password" 
                    className="input input-bordered input-info w-full max-w-xs" />
                  </div>
                  <div>
                  <GenderCheck />
                    <a 
                    className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block ' href="#">
                      Already have account?
                    </a>
                    <button className="btn btn-block btn-md mt-3 border border-slate-700 max-w-xs">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
  };
  
  export default SignUp

  
  // Starter Code
//   import GenderCheck from "./GenderCheck";

// const SignUp = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//               <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-blue-500'>BFCAI</span>
//                 </h1>
//                 <form>
//                   <div>
//                     <label className='label p-2'>
//                     <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" 
//                       placeholder="Enter Full Name" 
//                       className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <div>
//                   <label className='label p-2'>
//                     <span className='text-base label-text'>Username</span>
//                     </label>
//                   <input type="text" 
//                     placeholder="Enter username" 
//                     className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <div>
//                   <label className='label p-2'>
//                     <span className='text-base label-text'>Password</span>
//                     </label>
//                   <input type="text" 
//                     placeholder="Enter Password" 
//                     className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <div>
//                   <label className='label p-2'>
//                     <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                   <input type="text" 
//                     placeholder="Confirm Password" 
//                     className="input input-bordered input-info w-full max-w-xs" />
//                   </div>
//                   <div>
//                   <GenderCheck />
//                     <a 
//                     className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block ' href="#">
//                       Already have account?
//                     </a>
//                     <button className="btn btn-block btn-md mt-3 border border-slate-700 max-w-xs">SignUp</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//   };
  
//   export default SignUp
  