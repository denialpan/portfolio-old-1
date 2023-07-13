export default function Hamburger({isOpen}) {
    return (
        <>

            <div className='hamburger'>

                <div className='burger burger1'></div>
                <div className='burger burger2'></div>
                <div className='burger burger3'></div>

            </div>

            <style jsx> {`
            
                .hamburger {
                    width: 30px;
                    height: 30px;
                    padding-left: 1px;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }

                .hamburger:hover {
                    cursor: pointer;
                }

                .burger {
                    width: 30px;
                    height: 3px;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.5s ease;
                }

                .burger1 {
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }

                .burger2 {
                    opacity: ${ isOpen? 0 : 1};
                }

                .burger3 {
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }

            `}</style>


        </>
    )
}