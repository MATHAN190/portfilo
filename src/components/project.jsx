export default function Project(){
    const project = [{

    }]
    return(
        <section id="project" className=" rounded-xl bg-white p-5 text-center md:h-100" >
             <h1 className="text-2xl text-black font-sans font-bold">Project</h1>
               <div className=" flex flex-col md:flex-row  gap-7 justify-around  items-center p-5 ">
                      
                       <div className="  bg-indigo-500   rounded-2xl text-center pointer w-1/2 hover:shadow-2xl p-2 " style={{width:250, height:250}} >
                            <h1 className="text-xl text-white font-bold" >Shoe_Cart Website</h1>
                            <p className="font-sans p-2 mt-5"> Shoe cart Website using front-end development using html,css,js,react</p>
                             <button className="bg-white w-20 h-10 rounded-2xl mt-10 text-indigo-500 font-bold  "><a href="https://shoe-cart-63c18.web.app/" className="">View</a></button>
                       </div>

                        <div className=" bg-indigo-500 hover:shadow-2xl  rounded-2xl text-center pointer w-1/2 p-2 " style={{width:250, height:250}} >
                            <h1 className="text-xl text-white font-bold" >Shoe_Cart App</h1>
                            <p className="font-sans p-2 mt-5"> Shoe cart app create using flutter connecting back-end and database using FireBase </p>
                            <button className="bg-white w-20 h-10 rounded-2xl mt-10 text-indigo-500 font-bold   "><a href="https://www.linkedin.com/posts/madhan-kumar-k-ma190_created-music-together-app-using-flutter-activity-7342425971813175297-Nguf?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAECOk54BLeXAqEqoMxJ63_7f8FzX3GAX_v8&utm_campaign=share_via" className="">View</a></button>
                       </div>

                       <div className=" bg-indigo-500   hover:shadow-2xl  p-2 rounded-2xl text-center pointer w-1/2 " style={{width:250, height:250}} >
                            <h1 className="text-xl text-white font-bold" >Portfilo</h1>
                            <p className="font-sans p-2 mt-5"> Personal portfilo using html css and javaScript usig multiple animation </p>
                             <button className="bg-white w-20 h-10 rounded-2xl mt-10 text-indigo-500 font-bold   "><a href="https://madhan190ma.neocities.org/first" className="">View</a></button>
                       </div>
                       <div className=" bg-indigo-500   hover:shadow-2xl  p-2 rounded-2xl text-center pointer w-1/2 " style={{width:250, height:250}} >
                            <h1 className="text-xl text-white font-bold" >Music Together App</h1>
                            <p className="font-sans p-2 mt-5"> Music Together App with Neat UI and perfect funtion create using flutter and firebase </p>
                             <button className="  bg-white w-20 h-10 rounded-2xl mt-10 text-indigo-500 font-bold   "><a href="https://madhan190ma.neocities.org/first" className="">View</a></button>
                       </div>
               </div>
        </section>
    );
}