import React from 'react';
import {Button} from '@material-ui/core';
import {withPosts} from '../providers/PostDataProvider';


function BackButton(props) {
  return (
      <Button onClick={props.goBack}>
        Back
      </Button>
  );
};
export default withPosts(BackButton)
