import KekButton from '../ui/KekButton';

export default {
    title: 'UI/Button',
    component: KekButton,
}
const Template = (arg) => <KekButton {...arg}/>

export const Primer = Template.bind({});
Primer.args = {
    children: 'Kek me',

}