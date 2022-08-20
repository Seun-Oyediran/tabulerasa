import React, { Fragment, useState } from 'react';
import { ModalContainer } from '../../components';
import { UnpublishedDraft } from '../../components/questions';
import { DeleteModal } from '../../modals';

const Drafts = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <Fragment>
      <div>
        <UnpublishedDraft
          question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce?"
          answer="Sometimes the police may arrest a person on the property of another person. When this occurs howevecurs howevecurs hower, typicallycd m be additional steps for law enforcement to execute the arrest in a legal manner. SuspSometimes the police may arrest a person on the property of another person"
          handleDelete={() => {
            setShowDeleteModal(true);
          }}
        />

        <UnpublishedDraft
          question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce?"
          answer="Sometimes the police may arrest a person on the property of another person. When this occurs howevecurs howevecurs hower, typicallycd m be additional steps for law enforcement to execute the arrest in a legal manner. SuspSometimes the police may arrest a person on the property of another person"
          img="/img/question_card.png"
          handleDelete={() => {
            setShowDeleteModal(true);
          }}
        />

        <UnpublishedDraft
          question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce?"
          answer="Sometimes the police may arrest a person on the property of another person. When this occurs howevecurs howevecurs hower, typicallycd m be additional steps for law enforcement to execute the arrest in a legal manner. SuspSometimes the police may arrest a person on the property of another person"
          handleDelete={() => {
            setShowDeleteModal(true);
          }}
        />
      </div>

      <ModalContainer
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false);
        }}
        size="md"
        centered
      >
        <DeleteModal
          handleCancel={() => {
            setShowDeleteModal(false);
          }}
        />
      </ModalContainer>
    </Fragment>
  );
};

export default Drafts;
