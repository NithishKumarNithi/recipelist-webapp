import Section from './Section';

export default function MainBody() {
  return (
    <main>
      <Section title={'Indian'} recipes={'indian recipes'} />
      <Section title={'American'} recipes={'american recipes'} />
      <Section title={'Pakistani'} recipes={'pakistani recipes'} />
    </main>
  );
}
