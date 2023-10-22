import { Formik } from 'formik';
import {
  View, Text, TextInput, Button, ScrollView,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { professionalSlice, type ProfessionalState } from '@/store/slices/professional';

import FormInput from './FormInput';

function ProfessionalForm() {
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  const professionalData = useAppSelector((state) => state.professional);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    serviceName: Yup.string().required('Service Name is required'),
    sessionPrice: Yup.string().required('Session Price is required'),
    serviceHours: Yup.array().of(
      Yup.object().shape({
        day: Yup.string().required('Day is required'),
        openHours: Yup.object().shape({
          startsAt: Yup.string().required('Start time is required'),
          endsAt: Yup.string().required('End time is required'),
        }),
      }),
    ),
    scheduledHours: Yup.array().of(
      Yup.object().shape({
        day: Yup.string().required('Day is required'),
        startsAt: Yup.date().required('Start time is required'),
        endsAt: Yup.date().required('End time is required'),
      }),
    ),
  });

  const handleFormSubmit = (values: ProfessionalState) => {
    dispatch(professionalSlice.actions.setServiceName(values.serviceName));
    dispatch(professionalSlice.actions.setSessionPrice(values.sessionPrice));
    dispatch(professionalSlice.actions.setServiceHours(values.serviceHours));
  };

  return (
    <Formik
      initialValues={professionalData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleFormSubmit(values);
      }}
    >
      {({
        handleChange, handleSubmit, values, errors, touched,
      }) => (
        <ScrollView style={tailwind('flex-col w-full')}>
          <FormInput
            name="Name"
            value={values.name}
            touched={touched.name}
            errors={errors.name}
            handleChange={() => handleChange('name')}
          />
          <FormInput
            name="Service Name"
            value={values.serviceName}
            touched={touched.serviceName}
            errors={errors.serviceName}
            handleChange={() => handleChange('serviceName')}
          />

          <FormInput
            name="Session Price"
            value={values.sessionPrice}
            touched={touched.sessionPrice}
            errors={errors.sessionPrice}
            handleChange={() => handleChange('sessionPrice')}
          />

          {values.serviceHours.map((serviceHour, index) => (
            <View key={serviceHour.day} style={tailwind('flex-row justify-between pr-8 my-2')}>
              <Text style={tailwind('font-bold')}>Service Hours for {serviceHour.day}:</Text>

              <View style={tailwind('flex-row justify-center')}>
                <TextInput
                  style={tailwind('border')}
                  onChangeText={handleChange(`serviceHours[${index}].openHours.startsAt`)}
                  value={serviceHour.openHours.startsAt.toString()}
                  placeholder="Start time"
                />
                <Text> - </Text>
                <TextInput
                  style={tailwind('border')}
                  onChangeText={handleChange(`serviceHours[${index}].openHours.endsAt`)}
                  value={serviceHour.openHours.endsAt.toString()}
                  placeholder="End time"
                />
                {/* {touched.serviceHours
                    && touched.serviceHours[index]
                    && touched.serviceHours[index].openHours
                    && touched.serviceHours[index].openHours
                    && (errors.serviceHours
                      && errors.serviceHours[index]
                      && errors.serviceHours[index].openHours
                      && (errors.serviceHours[index].openHours.startsAt
                        || errors.serviceHours[index].openHours.endsAt)) && (
                        <Text style={{ color: 'red' }}>
                          {errors.serviceHours[index].openHours.startsAt
                        || errors.serviceHours[index].openHours.endsAt}
                        </Text>
                )} */}
              </View>

            </View>
          ))}

          <Button onPress={() => handleSubmit()} title="Apply changes" />
        </ScrollView>
      )}
    </Formik>
  );
}

export default ProfessionalForm;
