import React from 'react'
import NoteCard from '../../components/cards/NoteCard'
import {MdAdd} from 'react-icons/md'
import { useState } from 'react'
import Modal from 'react-modal'
import AddEditNotes from './AddEditNotes'

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    date: null,

  })
  return (
    <>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5'>

        <NoteCard title={'Wake up at 6 a.m.'} date={"5th june, 2021"} content={'You know nothing, Anjali '} tags={'#jon snow'} isPinned={true}
        
        onDelete={() => {}}
         onPinNote={() => {}}
         onEdit={() => {}}





         />
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>



      </div>
      
    </div>
    <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-800 absolute right-10  bottom-10'
    onClick={() => {
      setOpenAddEditModal({isShown : true, type: 'add', data: null})


    }}>
      <MdAdd className='text-32px text-white'/>
    </button>


      <Modal isOpen={openAddEditModal.isShown}
       onRequestClose={()=>{}} style={{
        overlay:{
          backgroundColor:'rgba(0, 0, 0, 0.2)',
        }, 

       }}
       contentLabel=''
       className='w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white
       rounded-md mx-auto mt-14 p-5 overflow-scroll'
       >
        <AddEditNotes onClose={() => setOpenAddEditModal({isShown: false, type : 'add', data : null})}

        noteData={openAddEditModal.data}
        type={openAddEditModal.type}
          />

       </Modal>

      


    </>
  )
}

export default Home
