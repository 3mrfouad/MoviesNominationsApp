const Banner = (
    {
        isOpen,
        setIsOpen
    }
) => {
    return isOpen ? (
        <div onClick={() => setIsOpen(false)}
            style={{
                display: `${isOpen ? 'block' : 'none'}`,
                position: 'fixed',
                top: '0',
                left: '0',
                background: '#b5babe9f',
                width: '100vw',
                height: '100vh',
                zIndex: "1"
            }}
            role="dialog">
            <div className="modal-dialog"
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Maximum Nominations Reached</h5>
                        <button type="button" onClick={() => setIsOpen(false)} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className='text-danger'>You've reached the nominations Maximum limit of 5.
                        </p>
                        <p>
                            Remove from current nominations to nominate other movies.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => setIsOpen(false)} className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    ) : ("");
}
export default Banner;

/*
component signature:

<Banner
 isOpen={isOpen}
 setIsOpen={setIsOpen}
/>

*/