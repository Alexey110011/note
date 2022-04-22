import React, {useRef} from 'react'
import './index.css'
import {v4} from 'uuid'
   
export class Form extends React.Component {
    
    constructor(props) {
    super(props)
    this.state= {
        tags:[],
        tags1:[],
        data:[],
        editedTag:'',
        editedTag1:[],
        editedNote: '',
        editedNote1:[],
        searchTag1:[],
        editedTag3:[],
        editedTagPost:'',
        editedTagPost1:[],
        editedTag2:[],
        searched:''
        };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleClear= this.handleClear.bind(this)
    this.handleNewEdit = this.handleNewEdit.bind((this))
    this.changeEdit = this.changeEdit.bind(this)
    this.searchingPost = this.searchingPost.bind(this)
    this.changeTag = this.changeTag.bind(this)
    this.handleNewTag = this.handleNewTag.bind(this)
    this.handleNewTag1 = this.handleNewTag1.bind(this)
    this.changeTag1 = this.changeTag1.bind(this)
    this.handleNewTag3 = this.handleNewTag3.bind(this)
}
  
    handleChange(e) {
        let searched = e.target.value
        this.setState({searched})
        }
    
    handleSubmit(post) {
        const someNumber =v4()
        const data = [...this.state.data, {
            post,
            id:someNumber
        }
    ]
        const tag= post.match(/(#[a-zwа-я\d-]+)/gi)
        const tags = [...this.state.tags, {
        tag, 
        id:someNumber
        }
    ] 
        this.setState({data})
        this.setState({tags})
       }

    handleNewEdit(){                                 
        const data = this.state.data.map(item=>{
        if(item.id===this.state.editedNote1[0].id) {
            return this.state.editedNote1[0]
        }else{
            return{...item}
            }
        }) 
      this.setState({data})
    }
        
    handleNewTag(){
        const tags = this.state.tags.map(item=>{
        if(item.id===this.state.editedTag1[0].id) {
            return this.state.editedTag1[0]
        }else{
            return {...item}
            }
        }) 
      this.setState({tags})
    }

    handleNewTag1(){
        const data = this.state.data.map(item=>{
        if(item.id===this.state.editedTagPost1[0].id) {
            return this.state.editedTagPost1[0]
            }else{
        return {...item}
            }
        }) 
      this.setState({data})
    }

    handleNewTag3(){
        const tags = this.state.tags.map(item=>{
        if(item.id===this.state.editedTag3[0].id) {
            return this.state.editedTag3[0]
        }else{
            return {...item}
            }
        }) 
        this.setState({tags})
    }
   
    handleRemove(id) {
        const data = this.state.data.filter(post=>
        post.id!==id)
        this.setState({data})
        const tags = this.state.tags.filter(tag=>
            tag.id!==id)
            this.setState({tags})
    }

    handleEdit(id){
        const editedNote1 = this.state.data.filter(post=>
            post.id===id
            );
        const editedNote = editedNote1[0].post
        const editedTag3= [...this.state.editedTag3, {
            tag:editedNote1[0].post.match(/(#[a-zwа-я\d-]+)/gim),
            id:editedNote1[0].id
        }
    ]
        this.setState({editedNote})
        this.setState({editedNote1})
        this.setState({editedTag3})
    }
           
  handleClear(_note) {
 
        const editedNote1 = []
        const editedNote  = ''
        const editedTag1= []
        const editedTag =''
        const editedTagPost1= []
        const editedTagPost =''
        const editedTag2 = []
        const editedTag3 = []
        this.setState({editedNote})
        this.setState({editedNote1})
        this.setState({editedTag})
        this.setState({editedTag1})
        this.setState({editedTagPost})
        this.setState({editedTagPost1})
        this.setState({editedTag2})
        this.setState({editedTag3})
    }

    changeEdit(post) {
        function obj3(objec,post){
            if(objec.length!==0){
            objec.splice(0,1,{
            post:post,
            id:objec[0].id
            });
            return objec
            }
    }
        const editedNote1 = obj3(this.state.editedNote1, post)
        this.setState({editedNote1})
    } 
          
    changeTag(post) { 
        function obj3(objec,post){       
            if(objec.length!==0){
            objec.splice(0,1,{
            tag:post.match(/(#[a-zwа-я\d-]+)/gim),
            id:objec[0].id
            });
            return objec
            }
        }
                
        function obj31(objec,post){
            if(objec.length!==0){
            objec.splice(0,1,{
            post:post,
            id:objec[0].id
            });
            return objec
            }
        }
        const editedTag1 = obj3(this.state.editedTag1, post) 
        this.setState({editedTag1})
                      
        const editedTagPost1 = obj31(this.state.editedTagPost1, post)
        this.setState({editedTagPost1})
        }

    changeTag1(post) { 
        function obj3(objec,post){      
            if(objec.length!==0){
            objec.splice(0,1,{
            tag:post.match(/(#[a-zwа-я\d-]+)/gim),
            id:objec[0].id
            });
            return objec
            }
        }
        const editedTag3 = obj3(this.state.editedTag3, post) 
        this.setState({editedTag3})
        }       

    searchingPost(id) {
        const editedTag1 = this.state.tags.filter(tag=>  
            tag.id===id)
                     
        const editedTag0 =this.state.data.map(item=>{  
            const etag = item.post.match(/(#[a-zwа-я\d-]+)/gim)
            if((etag)&&etag[0]===editedTag1[0].tag[0]){
                return item.post
                }else { 
            return null}
                })
            const editedTag = editedTag0.filter(item=>
                item!==null)

            const editedTagPost1 = this.state.data.filter(post=> 
            post.id===id);
            const editedTagPost = editedTagPost1[0].post                             
            this.setState({editedTag1})
            this.setState({editedTag})
            this.setState({editedTagPost})
            this.setState({editedTagPost1})
    }
        render() {
            const {handleChange, handleSubmit, handleRemove, handleEdit, handleClear, handleNewEdit, changeEdit, searchingPost, changeTag, handleNewTag, handleNewTag1,  changeTag1, handleNewTag3} = this
            const {data,tags, editedNote, editedNote1, editedTag, editedTag1, editedTagPost, editedTagPost1, searched, editedTag2, editedTag3} = this.state
    return(
        <div>
            <Note  data = {data} tags = {tags} editedTag3 = {editedTag3} editedNote = {editedNote} editedNote1 = {editedNote1} editedTag={editedTag}  editedTag1 = {editedTag1} editedTagPost={editedTagPost}  editedTagPost1 = {editedTagPost1}  editedTag2 = {editedTag2} searched={searched} onHandleSubmit = {handleSubmit} handleClear = {handleClear} onHandleEdit = {handleNewEdit} changeEdit = {changeEdit} handleChange= {handleChange} changeTag = {changeTag}  handleNewTag = {handleNewTag} handleNewTag1 = {handleNewTag1}  handleNewTag3 = {handleNewTag3} changeTag1 = {changeTag1}   />
            <PostList data = {data}  searched={searched} handleRemove ={handleRemove} onEdit = {handleEdit} handleChange = {handleChange}/>
            <TagList tags={tags} onEdit ={searchingPost} editedTag1={editedTag1} editedTag = {editedTag} editedTagPost1={editedTagPost1} editedTagPost = {editedTagPost} handleChange = {handleChange} searched={searched}/>
             </div>)
    }
} 
export default Form

const Note =({editedNote,editedNote1,editedTag,editedTag1,editedTagPost1,editedTag3, onHandleSubmit = f=>f,handleClear=f=>f, onHandleEdit=f=>f,handleNewTag=f=>f, changeEdit=f=>f, changeTag=f=>f, handleNewTag1=f=>f, changeTag1 = f=>f,handleNewTag3=f=>f } )=>{
    let _note
    const tres = useRef(null)
    if(editedNote!=='') {
        tres.current.value = editedNote
    }
    if (editedTag){
        tres.current.value = editedTag
    }
    const submit = (e)=> {
        e.preventDefault()
        _note = tres.current.value
        onHandleSubmit(_note);
        if(editedNote1.length!==0) {
        changeEdit(_note)
           }
        if(editedNote1.length!==0){
        onHandleEdit()
        }
        if(editedTag1.length!==0||editedTagPost1.length!==0){
        changeTag(_note)
        }
        if(editedTag1.length!==0||editedTagPost1.length!==0){
            handleNewTag()
            handleNewTag1()
        }
        if(editedTag3.length!==0){
            changeTag1(_note)
            handleNewTag3()
        }

        handleClear(_note)
        tres.current.value = ''
      }
      
    return(
    <div className="note">
    <form className = 'someText' onSubmit = {submit} >
        <textarea id = "text" name = 'post' placeholder = "Enter text" ref = {tres}></textarea>
        <button className="save">Save</button>
    </form>
    </div>)
   }
    
    const PostList = ({data, searched, handleRemove=f=>f, onEdit = f=>f, handleNotes = f=>f}) => {
       
    return(<div id = "postlist">
         <div >
            {data.map(post=>
            <Post id = "par" key = {post.id} {...post}
              handleRemove = {()=>handleRemove(post.id)}
              onEdit = {()=>onEdit(post.id)}
              searched={searched}/>
              )} 
         </div>
              </div>
           )
    }

    const Post = ({post, handleRemove=f=>f, onEdit = f=>f, searched}) => {
        if(!searched) {
            return (
                <div className = "cont">
                    <div className = "post">
                        {post}
                    </div>
                <div>
                    <button className = "buttonRemove" onClick = {handleRemove}>X</button>
                    <button className ="buttonEdit" onClick = {onEdit}><b><i>/</i></b></button>
                </div>
                </div>)
        }
        const regex = new RegExp(`(${searched})`,'gi')
        const parts = post.split(regex) 
        return (
           <div className="cont">
           <div className="post">
              {parts.filter(String).map((part,i)=>{
              return regex.test(part)?(
              <mark key = {i}>{part}</mark>)
              :(
                  <span key = {i}>{part} </span>
              );
            })}
         </div>
          <button className="buttonRemove" onClick = {handleRemove}>X</button>
          <button className="buttonEdit" onClick = {onEdit}><b><i>/</i></b></button>
          </div>
       )
    }
                       
        const Tag =({tag, onEdit=f=>f})=>{
        if(tag){
           return (
               <div>
            <div id = "tag" className = "tags" onClick={onEdit} >{tag}</div>
            </div>
            )
        }
        else {return null}
   }
    const TagList =({tags, onEdit=f=>f, handleChange = f=>f })=>{
        if(tags){
        return (
            <div id = "taglist">
            <div><b>Tags List</b>
            <input id ="searchtag" type= "text" placeholder = "Search by tag" onChange={handleChange}></input>
             {tags.map(tag=>
            <Tag key = {tag.id}{...tag}
            onEdit={()=>onEdit(tag.id)}/>
        )}
            </div>
        </div>
        )}
       }

           