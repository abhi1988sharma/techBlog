

function Banner() {
  return (
    <div className="max-w-7xl mx-auto">
       
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
     <div className="px-10 space-y-5">
       <h1 className="text-6xl max-w-xl font-serif">
        <span className="underline decoration-black decoration-4">Tech-blogs</span> is a place to write read and connect.</h1>
       <h2 className="">It is to post your thoughts and connects to many people around the world.</h2>
       </div>
     <img className=" hidden md:inline-flex h-32 lg:h-full"
     src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
     alt="Medium logo" />
    </div>
</div>
  )
};
export default Banner;
