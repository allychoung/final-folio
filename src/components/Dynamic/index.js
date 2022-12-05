import React from "react";

const Dynamic = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3"></div>
            <div className="col-6">
            <div>
                <h3>Iteration I</h3>
                <p>This is static, plain text.</p>
            </div>
            <div>
                <h3>Iteration II</h3>
                    <section>
                        <div>
                            <h2>What if we were to enforce the speed and pace at which everyone read? Is this a solution to the issue of a lack of close reading in the world of digital texts and endless streams of information? </h2>
                        </div>
                        {/* <div>
                            <h2>here is 2nd text</h2>
                        </div> */}
                    </section>
            </div>

            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Dynamic; 