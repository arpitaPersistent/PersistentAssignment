import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { ThemeService } from '../../services/theme.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Podcast/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot(reducers, {}), RouterTestingModule],
      providers: [ThemeService]
    }),
  ],
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  component: HomeComponent,
  props: args,
});

export const Title = Template.bind({});
Title.args = {
};

