import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/Theme'
import Lock from './Lock'
import Mail from './Mail'
import Search01Icon from './Search'
import Location from './Location'
import Call from './Call'
import Camera from './Camera'
import ArrowLeft from './ArrowL'
import Delete from './Delete'
import Logout from './Logout'
import Image from './Image'
import Video from './Video'
import MoreVerticalCircle01Icon from './ThreeDotsCircle'
import MoreHorizontalCircle01Icon from './ThreedotsHorizontal'
import FavouriteIcon from './Heart'
import Plus from './Plus'
import AiEditingIcon from './Edit'
import Comment01Icon from './Comment'
import Share01Icon from './Share'
import SentIcon from './Send'

const icons ={
    home:Home,
    mail:Mail,
    lock:Lock,
    heart:FavouriteIcon,
    plus:Plus,
    search:Search01Icon,
    loaction:Location,
    call:Call,
    camera:Camera,
    edit:AiEditingIcon,
    arrowleft:ArrowLeft,
    threedotcircle:MoreVerticalCircle01Icon,
    threedotHorizontal:MoreHorizontalCircle01Icon,
    comment:Comment01Icon,
    share:Share01Icon,
    send:SentIcon,
    delete:Delete,
    logout:Logout,
    image:Image,
    video:Video
}

const Icon = ({name,...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent height = {props.size ||24} 
    width= {props.size ||24} 
    stroke = {props.stroke || 1.9}
    color= {theme.colors.textLight}
    {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({})