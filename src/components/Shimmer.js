
const Shimmer = () =>{ 
   
    return (
      <div className="flex flex-wrap">
        {Array(20).fill("").map( e => <div className="mt-20 w-[200px] h-[200px] bg-gray-400 m-[20px]"></div>)}
      </div>
    );
}
export default Shimmer ; 