import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { ThemeService } from '../../services/theme.service';
import { RouterTestingModule} from '@angular/router/testing';

export default {
  title: 'Podcast/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule,
        StoreModule.forRoot(reducers, {})],
      providers: [ThemeService]
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const SignIn = Template.bind({});
SignIn.args = {
  user: {},
};

export const SignUp = Template.bind({});
SignUp.args = {};

export const Home = Template.bind({});
Home.args = {};

export const AddPodcast = Template.bind({});
AddPodcast.args = {};

export const LogOut = Template.bind({});
LogOut.args = {};
