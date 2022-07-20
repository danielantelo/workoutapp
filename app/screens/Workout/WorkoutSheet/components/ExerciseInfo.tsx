import { Icon, Modal, Pressable } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { RoutineEntry } from '../../../../domain/programs';
import { Video } from '../../../../components/Content';

export const ExerciseInfo = ({ item }: { item: RoutineEntry }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { video } = item;
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      >
        <Modal.CloseButton />
        {video && <Video video={video} />}
      </Modal>
      {video && (
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Icon as={MaterialCommunityIcons} name={'information-outline'} size={'sm'} />
        </Pressable>
      )}
    </>
  );
};
