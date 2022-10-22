import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import './todo.scss'
const Todo = () => {
  const [user, setUser] = useState()
  const [allTasks, setAllTasks] = useState([])
  const [task, setTask] = useState({ title: '', description: '', isCompleted: '' })

  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('Student'))
    const getUserDetails = async () => {
      const reqUser = await axios.get(`${process.env.REACT_APP_HOST}/student/get/${userInfo.student_id}`, {
        headers: {
          Authorization: 'Bearer ' + userInfo.accessToken //the token is a variable which holds the token
        }
      })
      setUser(reqUser.data)
      // reqUser.todo && setAllTasks(reqUser.todo)
    }
    getUserDetails()

    localStorage.getItem('tasks') && setAllTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [updating])

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = JSON.parse(localStorage.getItem('Student'))

    setTask({ ...task, isCompleted: false })
    allTasks.push(task)

      (localStorage.setItem('tasks', JSON.stringify(allTasks)))

    const updateUser = async () => {
      await axios.put(`${process.env.REACT_APP_HOST}/update/${user._id}`, {
        todo: allTasks,
        headers: {
          Authorization: 'Bearer ' + userInfo.accessToken
        }
      })
    }

    // updateUser()

    // setTask({ ...task, title: ', description: '', isCompleted: '' })
  }


  return (
    <>
      <Sidebar />
      <div className="topbar">
        <h1>NITS Toolkit</h1>
        <span className='StudentName'>{user && user.name}</span>
        <br />
        <span className="CourseSemBranch">{user && user.courseName}. {user && user.semester} - {user && user.deptName}</span>
      </div>


      <div className="dashBody">
        <div className="dashBody__contentTodo">

          {/* <div className="flexabout">
          </div> */}
          {/* <h3>Actice tasks</h3> */}
          <div className='bdy'>
            <div className="formed">
              <form onSubmit={handleSubmit} method="post">
                <ul>
                  <li>
                    <label htmlFor="name">Title  :</label>
                    <input type="text" id="name" name="user_name" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
                  </li>
                  <li>
                    <label htmlFor="msg">Description  :</label>
                    <textarea id="msg" name="user_message" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />
                  </li>
                  <li>
                    <button className="btn btn--block card__btn">Done</button>
                  </li>
                </ul>
              </form>
            </div>
            <div className="about">
              <h3>Active tasks</h3>
              <ul className="cards">

                {
                  allTasks.filter(task => task.isCompleted === false).map(tsk => {
                    return (
                      <li className="cards__item">
                        <div className="card">
                          {/* <div className="card__image card__image--fence" /> */}
                          <div className="card__content">
                            <div className="card__title">{tsk.title}</div>
                            <p className="card__text">{tsk.description} </p>
                            <button className="btn btn--block card__btn" onClick={() => {
                              tsk.isCompleted = true
                              setUpdating(!updating)
                              localStorage.setItem('tasks', JSON.stringify(allTasks))
                            }}>Done</button>

                            {/* <button className="btn btn--block card__btn">Edit</button> */}

                          </div>
                        </div>
                      </li>
                    )
                  })
                }


              </ul>


              <h3>Completed tasks</h3>
              <ul className="cards">
                {
                  allTasks.filter(task => task.isCompleted === true).map(tsk => {
                    return (
                      <li className="cards__item">
                        <div className="card">
                          {/* <div className="card__image card__image--fence" /> */}
                          <div className="card__content">
                            <div className="card__title">{tsk.title}</div>
                            <p className="card__text"> {tsk.description} </p>
                            <button className="btn btn--block card__btn" onClick={() => {
                               tsk.isCompleted = false
                               localStorage.setItem('tasks', JSON.stringify(allTasks))
                               setUpdating(!updating)
                            }}>UnDone</button>
                            {/* <button className="btn btn--block card__btn">Edit</button>  */}
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>

            </div>
          </div>

        </div>
        <div className="side-flex">

        </div>
      </div>
    </>
  )
}

export default Todo