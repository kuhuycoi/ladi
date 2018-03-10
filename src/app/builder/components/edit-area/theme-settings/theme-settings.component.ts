import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.css']
})
export class ThemeSettingsComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild("themeSettings", { read: ElementRef }) themeSettings: ElementRef;
  ngOnInit() {
    

$('.color-picker').each(function () {
  $(this).minicolors({
    control: $(this).attr('data-control') || 'hue',
    defaultValue: $(this).attr('data-defaultValue') || '',
    format: $(this).attr('data-format') || 'hex',
    keywords: $(this).attr('data-keywords') || '',
    inline: $(this).attr('data-inline') === 'true',
    letterCase: $(this).attr('data-letterCase') || 'lowercase',
    opacity: $(this).attr('data-opacity'),
    position: $(this).attr('data-position') || 'bottom left',
    swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
    change: function (value, opacity) {
      if (!value) return;
      if (opacity) value += ', ' + opacity;
      if (typeof console === 'object') {
        console.log(value);
      }
    },
    theme: 'bootstrap'
  });
});
  }
  ngAfterViewInit() {
    $('.option-list .ts-title').click(function () {
      $(this).children('.fa').toggleClass('fa-caret-down fa-caret-right');
      $(this).next('.ts-body').stop(0).slideToggle('300');
    });
  }
  toggleThemeSettings() {
    this.themeSettings.nativeElement.classList.toggle('active');
  }
}
