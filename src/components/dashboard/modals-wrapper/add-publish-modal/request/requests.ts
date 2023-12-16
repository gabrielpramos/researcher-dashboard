import {
  AreasData,
  PlacesOfPublishData,
  PublishType,
  TypesData,
} from '../../../../../models/types';
import { addAreaRequestSettings } from '../../../data-wrapper/data-request-settings/area-request-settings';
import { addPlaceOfPublishRequestSettings } from '../../../data-wrapper/data-request-settings/place-of-publish-request-settings';
import {
  AddPublishBodyType,
  addPublishRequestSettings,
} from '../../../data-wrapper/data-request-settings/publish-request-settings';
import { addTypeRequestSettings } from '../../../data-wrapper/data-request-settings/types-request-settings';
import { FormData } from '../publish-modal-form';

type AddNewInputsRequestParams = {
  areasData: AreasData;
  typesData: TypesData;
  placesOfPublishData: PlacesOfPublishData;
  formData: FormData;
};
type PublishTypeParams = {
  typesData: TypesData;
  selectedType: string;
};
type PublishAreaParams = {
  areasData: AreasData;
  selectedArea: string;
};
type PlaceOfPublishParams = {
  placesOfPublishData: PlacesOfPublishData;
  selectedPlaceOfPublish: string;
};
type GetPublishParam<T> = (params: T) => Promise<string>;

const getPublishTypeId: GetPublishParam<PublishTypeParams> = async ({
  typesData,
  selectedType,
}) => {
  if (!typesData.find(({ id }) => id === selectedType)) {
    return fetch(addTypeRequestSettings({ type: selectedType }))
      .then((response) => response.json())
      .then((data: PublishType) => data.id);
  }

  return new Promise<string>((resolve) => {
    resolve(selectedType);
  });
};

const getPublishAreaId: GetPublishParam<PublishAreaParams> = async ({
  areasData,
  selectedArea,
}) => {
  if (!areasData.find(({ id }) => id === selectedArea)) {
    return fetch(addAreaRequestSettings({ area: selectedArea }))
      .then((response) => response.json())
      .then((data: PublishType) => data.id);
  }

  return new Promise<string>((resolve) => {
    resolve(selectedArea);
  });
};

const getPlaceOfPublishId: GetPublishParam<PlaceOfPublishParams> = async ({
  placesOfPublishData,
  selectedPlaceOfPublish,
}) => {
  if (!placesOfPublishData.find(({ id }) => id === selectedPlaceOfPublish)) {
    return fetch(
      addPlaceOfPublishRequestSettings({ place_name: selectedPlaceOfPublish })
    )
      .then((response) => response.json())
      .then((data: PublishType) => data.id);
  }

  return new Promise<string>((resolve) => {
    resolve(selectedPlaceOfPublish);
  });
};

export const addPublish = (params: AddPublishBodyType) =>
  fetch(addPublishRequestSettings(params)).then((response) => {
    if (response.status !== 200) {
      throw new Error('Something went wrong, please check the response');
    }
    return response.json();
  });

export const addNewInputs = async ({
  typesData,
  areasData,
  placesOfPublishData,
  formData,
}: AddNewInputsRequestParams) => {
  return Promise.allSettled([
    getPublishTypeId({
      typesData,
      selectedType: formData.publishType,
    }),
    getPublishAreaId({ areasData, selectedArea: formData.publishArea }),
    getPlaceOfPublishId({
      placesOfPublishData,
      selectedPlaceOfPublish: formData.placeOfPublish,
    }),
  ]).then(
    ([publishTypeResponse, publishAreaResponse, placeOfPublishResponse]) => {
      const { value: type_id } =
        publishTypeResponse as PromiseFulfilledResult<string>;
      const { value: area_id } =
        publishAreaResponse as PromiseFulfilledResult<string>;
      const { value: place_id } =
        placeOfPublishResponse as PromiseFulfilledResult<string>;

      return {
        type_id,
        area_id,
        place_id,
      };
    }
  );
};
