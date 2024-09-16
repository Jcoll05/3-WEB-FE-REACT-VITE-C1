const Main1 = () => {
    return (
      <main1 className="grid grid-rows-2 border-2 border-black">
        <section className="grid grid-rows-3 border-2 border-black">
          <h1>Introduction</h1>
        </section>
        <section className="grid grid-rows-4 grid-cols-2 gap-2 border-2 border-black p-1">
         <h1>1. Diagnostico Actual</h1>
         <br></br>
         <div className="col-span-1 border border-black">
          <h1> content 1 </h1>
         </div>
         <div className="col-span-1 border border-black">
            <h1> content 2</h1>
         </div>
         <div className="col-span-1 border border-black">
            <h1> content 3</h1>
         </div>
         <div className="col-span-1 border border-black">
            <h1> content 4</h1>
         </div>
        </section>
        <section className="grid grid-rows-5 border-2 border-black p-1">
          <h1>2. Identidad Organizacional</h1>


        </section>
        <section className="grid grid-rows-6 border-2 border-black p-1">
            <h1> 3. Objetivos estrategicos </h1>
        </section>
      </main1>
    );
  };
  
  export default Main1;