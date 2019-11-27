import React from 'react';
import { Button } from 'reactstrap';
import {withPosts} from '../providers/PostDataProvider';


function BackButton(props) {
  return (
    <div>
      <Button color="secondary" onClick={props.goBack}>Back</Button>
    </div>
  );
};
export default withPosts(BackButton)
