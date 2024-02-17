
const Abstraction = ({ abstraction }: { abstraction: string }) => {
  return (
    <div className="">
      <h3 className="text-2xl md:text-3xl font-medium leading-tight ">
        Abstraction
      </h3>
      <p className="mt-5 text-base md:text-xl  font-normal leading-relaxed">
        {abstraction} 
      </p>

    </div>
  )
}

export default Abstraction