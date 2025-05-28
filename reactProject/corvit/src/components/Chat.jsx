import React, { useState } from "react";



function Chat() {

    const [message, setMessage] = useState('');


    const sendMessage = (e) => {


    }



    return (
        <>
            <div className="container-fluid my-4">
                <div
                    className="row shadow rounded"
                    style={{ height: "90vh", overflow: "hidden" }}
                >
                    <div className="col-md-4 bg-light border-end p-0">
                        <div className="p-3 bg-white border-bottom">
                            <h5 className="mb-0 fw-bold">Chats</h5>
                        </div>
                        <div
                            className="list-group list-group-flush"
                            style={{ height: "calc(90vh - 56px)", overflowY: "auto" }}
                        >
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex align-items-center gap-3"
                            >
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="User"
                                    className="rounded-circle"
                                    width={45}
                                    height={45}
                                />
                                <div>
                                    <div className="fw-semibold">Sarah Taylor</div>
                                    <small className="text-muted">Typing...</small>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action d-flex align-items-center gap-3"
                            >
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User"
                                    className="rounded-circle"
                                    width={45}
                                    height={45}
                                />
                                <div>
                                    <div className="fw-semibold">David Cooper</div>
                                    <small className="text-muted">Online</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex flex-column bg-white">
                        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    className="rounded-circle"
                                    width={45}
                                    height={45}
                                />
                                <div>
                                    <h6 className="mb-0 fw-bold">Sarah Taylor</h6>
                                    <small className="text-muted">Online</small>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-grow-1 p-4"
                            style={{ overflowY: "auto", backgroundColor: "#f8f9fa" }}
                        >
                            <div className="d-flex mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    className="rounded-circle me-3"
                                    width={40}
                                    height={40}
                                />
                                <div
                                    className="bg-white p-3 rounded shadow-sm"
                                    style={{ maxWidth: "70%" }}
                                >
                                    <p className="mb-1">Hey! Are you coming to the meeting today?</p>
                                    <small className="text-muted">10:01 AM</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-4">
                                <div
                                    className="bg-primary text-white p-3 rounded shadow-sm"
                                    style={{ maxWidth: "70%" }}
                                >
                                    <p className="mb-1">Yes, I’ll be there in 10 mins.</p>
                                    <small className="text-white-50 d-flex justify-content-end align-items-center gap-1">
                                        10:03 AM
                                        <span className="ms-2 text-info fw-bold">✔✔</span>
                                    </small>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    className="rounded-circle me-3"
                                    width={40}
                                    height={40}
                                />
                                <div
                                    className="bg-white p-3 rounded shadow-sm"
                                    style={{ maxWidth: "70%" }}
                                >
                                    <p className="mb-1">Awesome! See you soon then 😄</p>
                                    <small className="text-muted">10:04 AM</small>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 border-top d-flex align-items-center">
                            <form onSubmit={sendMessage}>
                                <input
                                    type="text"
                                    className="form-control me-2 rounded-pill px-4"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={(data)=> setMessage(data.target.value)}
                                />
                                <button type="submit" className="btn btn-primary rounded-pill px-4">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}


export default Chat;