import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const oneHour = new Date(0);
oneHour.setUTCHours(1);

type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

type ServiceHour = {
  day: Day,
  openHours: {
    startsAt: Date,
    endsAt: Date,
  }[],
};

type ScheduledHour = {
  day: Day,
  startsAt: Date,
  endsAt: Date,
};

type ProfessionalState = {
  name: string,
  serviceName: string,
  serviceHours: ServiceHour[],
  sessionDuration: Date,
  sessionPrice: string,
  scheduledHours: ScheduledHour[],
};

const initialState: ProfessionalState = {
  name: 'Matías Montagna',
  serviceName: 'Therapy session',
  serviceHours: [],
  sessionDuration: oneHour,
  sessionPrice: '50 USD',
  scheduledHours: [],
};

export const professionalSlice = createSlice({
  name: 'professional',
  initialState,
  reducers: {
    setServiceName(state, action: PayloadAction<string>) {
      state.serviceName = action.payload;
    },
    setServiceHours(state, action: PayloadAction<ServiceHour[]>) {
      state.serviceHours = action.payload;
    },
    setSessionPrice(state, action: PayloadAction<string>) {
      state.sessionPrice = action.payload;
    },
    addScheduledHour(state, action: PayloadAction<ScheduledHour>) {
      state.scheduledHours = [
        ...state.scheduledHours,
        action.payload,
      ];
    },
  },
});