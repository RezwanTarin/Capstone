import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import { InputField, InputWrapper } from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker'

import {
    AddImage,
    SubmitBtn,
    SubmitBtnText,
} from '../styles/AddPost'


const UploadProject = () => {
    
        
    

    
        const [image, setImage] = useState(null);

        const takePhotoFromCamera = () => {
            ImagePicker.openCamera({
                width: 1200,
                height: 700,
                cropping: true,
            }).then((image) => {
                console.log(image);
                const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                setImage(imageUri);
            });
        };

        const choosePhotoFromLibrary = () => {
            ImagePicker.openPicker({
                width: 1200,
                height: 700,
                cropping: true,
            }).then((image) => {
                console.log(image);
                const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                setImage(imageUri);
            });
        };
        return(
            
            <View style={styles.container}>
            <InputWrapper>
                {image != null ? <AddImage source={{uri: image}} /> : null}
                <InputField
                    placeholder="What's on your mind?"
                    multiline
                    numberOfLine={4}
                />

                <SubmitBtn onPress={() => {}}>
                    <SubmitBtnText>Post</SubmitBtnText>
                </SubmitBtn>
            </InputWrapper>
            <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={takePhotoFromCamera}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={choosePhotoFromLibrary}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
        </View>
        );
    
};

export default UploadProject;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

});