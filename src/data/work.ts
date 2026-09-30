export type Role = {
  title: string;
  place: string;
  period?: string;
  text: string;
};

// Most recent first. Keep descriptions general: no internal system names or figures.
export const work: Role[] = [
  {
    title: 'Management Information Systems',
    place: 'Head Office',
    period: 'Present',
    text: 'Management information, regulatory reporting and banking data. I build small internal tools to make month-end reporting faster and more reliable.',
  },
  {
    title: 'Branch banking and credit',
    place: 'Branch',
    text: 'Day-to-day branch banking and credit operations, which is where I learned how the numbers behind reports are actually produced.',
  },
];

// Set once confirmed; shown on the About page.
export const employer = 'Sammilito Islami Bank PLC';
