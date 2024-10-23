import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/userContext'
import io from 'socket.io-client'
import { formatAMPM } from '../../utils/formatDate'
import ScrollToBottom from 'react-scroll-to-bottom';
import './style.css'
import $ from 'jquery'


const socket = io.connect("http://localhost:5000")

const Inbox = () => {

    const roomId = useParams().roomId
    const [user] = useContext(UserContext)
    const [room, setRoom] = useState()
    const [rooms, setRooms] = useState([])
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:5000/rooms").then(function (res) {
            setRooms(res.data.rooms)
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/room/${roomId}`).then(function (res) {
            console.log(res.data.room)
            setRoom(res.data.room)
        })
    }, [roomId])

    useEffect(() => {
        socket.emit("joinRoom", { roomId: roomId })
    }, [roomId])

    useEffect(() => {
        axios.get(`http://localhost:5000/load-messages/${roomId}`).then(function (res) {
            setMessages(res.data.messages)
        })
    }, [roomId])

    useEffect(() => {
        console.log(user ? user : "No User")
    }, [])


    const sendMessage = () => {
        const date = new Date(Date.now())
        const contact = user?._id === room.user._id ? room.creater._id : room.user._id
        const messageData = { sentBy: user?._id, sentTo: contact, message: message, room: room._id, date: date, time: formatAMPM(date) }
        if (image) {
            var fd = new FormData();
            fd.append('image', image)
            fd.append('sentBy', user?._id)
            fd.append('sentTo', contact)
            fd.append('message', message)
            fd.append('room', room._id)
            fd.append('date', date)
            fd.append('time', formatAMPM(date))

            axios.post("http://localhost:5000/send-image", fd)
            setImage()
            $('#img-preview').css({ visibility: "hidden", width: "0" })
        } else {
            socket.emit('sendMessage', (messageData))
            setMessage('')
        }
        // setMessages((list) => [...list, messageData])
        $(".message-container").scrollTop($(".message-container")[0].scrollHeight);

    }

    const selectImage = (file) => {
        file.url = URL.createObjectURL(file)
        setImage(file)
        $('#img-preview').css({ visibility: "visible", width: "4ch" })
    }

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            console.log(data)
            setMessages((list) => [...list, data])
            $(".message-container").scrollTop($(".message-container")[0].scrollHeight);

        })
    }, [roomId])


    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className='container mx-auto col-md-9 px-5 my-4' >
                <div className='border rounded' style={{ background: "#f1f1f1", height: '70ch', marginTop: '12ch' }}>
                    <div className='row h-100' >
                        <div className='col-md-4 my-4'>
                            <p className='text-xl fw-bold mx-3'>Chats</p>

                            <div className='chat-list'>
                                {
                                    rooms.length > 0 ?
                                        <>
                                            {
                                                rooms.map((val, ind) => {
                                                    return (
                                                        <div key={ind}>
                                                            <Link style={{ textDecoration: "none" }} className="" to={`/inbox/${val._id}`}>
                                                                <div className='d-flex mx-3 my-3 py-2 px-3 rounded hover' style={{ background: "#ffffff" }}>
                                                                    <div className=''>
                                                                        <img className='rounded-circle' style={{ height: "4ch", width: "4ch", objectFit: "cover" }} src={`http://localhost:5000/${val.user._id === user?._id ? val.creater.image : val.user.image}`} alt="" />
                                                                    </div>
                                                                    <div className='mx-2'>
                                                                        <small className='text-xs'>{val.user._id === user?._id ? val.creater.name : val.user.name}</small>
                                                                        <small className='d-block fw-bold'>{val.user._id === user?._id ? val.creater.role : val.user.role}</small>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </> :
                                        <>Loading...</>
                                }
                            </div>
                        </div>
                        <div className='col-md-5 d-flex'>
                            <div className='h-100' style={{ width: "1px", background: "#e0e0e0" }}></div>

                            <div className='w-100' style={{ position: "relative" }}>
                                {
                                    room ?
                                        <>
                                            <div className='d-flex pt-2 pb-2 px-3 bg-light' style={{ borderBottom: "2px solid #e0e0e0" }}>
                                                <div className='d-flex'>
                                                    <div>
                                                        <img className='rounded-circle' style={{ height: "5ch", width: "5ch", objectFit: "cover" }} src={`http://localhost:5000/${room.user._id === user?._id ? room.creater.image : room.user.image}`} alt="" />
                                                    </div>
                                                    <div className='mx-2'>
                                                        {
                                                            user?._id === room.user._id ?
                                                                <small>{room.creater.name}</small> :
                                                                <small>{room.user.name}</small>
                                                        }
                                                        <small className='d-block text-xs'>1h ago</small>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='px-3'>
                                                <ScrollToBottom className='py-4 message-container m-0'>

                                                    {
                                                        messages?.map((val, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    {
                                                                        val.sentBy !== user?._id ?
                                                                            <div className='d-flex my-2'>
                                                                                <div className='rounded px-3 py-1' style={{ background: "#ffffff", maxWidth: "40ch" }}>
                                                                                    <small className='text-xs fw-bold d-block'>{user?._id === room.user._id ? room.creater.username : room.user.username}</small>
                                                                                    {
                                                                                        val.image ?
                                                                                            <img className='rounded' src={`http://localhost:5000/${val.image}`} style={{ height: "25ch", width: "100%", objectFit: "cover" }} alt="" /> :
                                                                                            <></>
                                                                                    }
                                                                                    <small className='text-sm'>{val.message}</small>
                                                                                    <small className='d-block text-end text-xs text-primary'>{val.time}</small>
                                                                                </div>
                                                                            </div> :
                                                                            <div className='d-flex my-2'>
                                                                                <div className='rounded px-3 py-1 ms-auto' style={{ background: "#78A0FF", maxWidth: "40ch" }}>
                                                                                    <small className='text-xs fw-bold d-block text-light'>You</small>
                                                                                    {
                                                                                        val.image ?
                                                                                            <img className='rounded' src={`http://localhost:5000/${val.image}`} style={{ height: "25ch", width: "100%", objectFit: "cover" }} alt="" /> :
                                                                                            <></>
                                                                                    }
                                                                                    <small className='text-sm text-light m-0'>{val.message}</small>
                                                                                    <small className='d-block text-end text-xs text-primary text-light'>{val.time}</small>
                                                                                </div>
                                                                            </div>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </ScrollToBottom>
                                            </div>
                                        </> :
                                        <>
                                            <p>Loading...</p>
                                        </>
                                }
                                <div className='bg-dark w-100 p-0'>
                                    <div className='w-100' style={{ position: 'absolute', bottom: "0" }}>
                                        <div className='form-group my-3'>
                                            <div className='d-flex mx-3 border py-1 px-2 bg-light'>
                                                <input id='image-inp' onChange={(e) => selectImage(e.target.files[0])} type="file" accept='image/*' hidden />
                                                <div id="img-preview" className='me-2' style={{ visibility: "hidden", width: "0" }}>
                                                    <img className='rounded' src={image?.url} style={{ height: "4ch", width: "4ch", objectFit: "cover" }} alt="" />
                                                </div>
                                                <input onChange={(e) => { setMessage(e.target.value) }} className='w-100 text-sm' type="text" style={{ border: "none", outline: "none" }} placeholder="Type message here..." />
                                                <div>
                                                    <button className='btn' onClick={() => { $('#image-inp').click() }} type="button"><i className='fa-solid fa-file-image' style={{color: "#1965fc"}}></i></button>
                                                </div>
                                                <div>
                                                    <button className='btn' onClick={sendMessage} type="button" onKeyUp={sendMessage}><i className='fa-solid fa-paper-plane' style={{color: "#1965fc"}}></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Inbox