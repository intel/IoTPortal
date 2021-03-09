export const APP_OPTIONS = [
  {value: 'docker', label: 'docker'},
  {value: 'compose', label: 'compose'},
  {value: 'application', label: 'application'}
];

export const COMMAND_OPTIONS = {
  docker: [
    {value: 'import', label: 'import'},
    {value: 'load', label: 'load'},
    {value: 'pull', label: 'pull'},
    {value: 'remove', label: 'remove'},
    {value: 'stats', label: 'stats'},
  ],
  compose: [
    {value: 'up', label: 'up'},
    {value: 'down', label: 'down'},
    {value: 'pull', label: 'pull'},
    {value: 'list', label: 'list'},
    {value: 'remove', label: 'remove'},
  ],
  application: [
    {value: 'update', label: 'update'}
  ]
};

export const REBOOT_OPTIONS = [
  {value: true, label: 'Yes'},
  {value: false, label: 'No'},
];

export const INITIAL_AOTA_FIELDS_HIDDEN_STATE = {
  command: true,
  tag: true,
  reboot: true,
  fetch_link: true,
  signature: true,
  version: true,
  server_username: true,
  server_password: true,
  docker_registry: true,
  docker_username: true,
  docker_password: true,
  docker_compose_file: true
};

export const AOTA_FIELDS_HIDDEN_STATES = {
  docker: {
    import: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: false,
      server_username: false,
      server_password: false,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    load: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: false,
      server_username: false,
      server_password: false,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    pull: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: true
    },
    remove: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: false,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    stats: {
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    }
  },
  compose: {
    up: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: false,
      server_password: false,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: false
    },
    down: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    pull: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: false,
      server_password: false,
      docker_registry: false,
      docker_username: false,
      docker_password: false,
      docker_compose_file: false
    },
    list: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    },
    remove: {
      command: false,
      tag: false,
      reboot: true,
      fetch_link: true,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true
    }
  },
  application: {
    update: {
      command: false,
      tag: true,
      reboot: false,
      fetch_link: false,
      signature: true,
      version: true,
      server_username: true,
      server_password: true,
      docker_registry: true,
      docker_username: true,
      docker_password: true,
      docker_compose_file: true,
    }
  }
};

export const colourOptions = [
  {value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true},
  {value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true},
  {value: 'purple', label: 'Purple', color: '#5243AA'},
  {value: 'red', label: 'Red', color: '#FF5630', isFixed: true},
  {value: 'orange', label: 'Orange', color: '#FF8B00'},
  {value: 'yellow', label: 'Yellow', color: '#FFC400'},
  {value: 'green', label: 'Green', color: '#36B37E'},
  {value: 'forest', label: 'Forest', color: '#00875A'},
  {value: 'slate', label: 'Slate', color: '#253858'},
  {value: 'silver', label: 'Silver', color: '#666666'},
];

export const flavourOptions = [
  {value: 'vanilla', label: 'Vanilla', rating: 'safe'},
  {value: 'chocolate', label: 'Chocolate', rating: 'good'},
  {value: 'strawberry', label: 'Strawberry', rating: 'wild'},
  {value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy'},
];

export const stateOptions = [
  {value: 'AL', label: 'Alabama'},
  {value: 'AK', label: 'Alaska'},
  {value: 'AS', label: 'American Samoa'},
  {value: 'AZ', label: 'Arizona'},
  {value: 'AR', label: 'Arkansas'},
  {value: 'CA', label: 'California'},
  {value: 'CO', label: 'Colorado'},
  {value: 'CT', label: 'Connecticut'},
  {value: 'DE', label: 'Delaware'},
  {value: 'DC', label: 'District Of Columbia'},
  {value: 'FM', label: 'Federated States Of Micronesia'},
  {value: 'FL', label: 'Florida'},
  {value: 'GA', label: 'Georgia'},
  {value: 'GU', label: 'Guam'},
  {value: 'HI', label: 'Hawaii'},
  {value: 'ID', label: 'Idaho'},
  {value: 'IL', label: 'Illinois'},
  {value: 'IN', label: 'Indiana'},
  {value: 'IA', label: 'Iowa'},
  {value: 'KS', label: 'Kansas'},
  {value: 'KY', label: 'Kentucky'},
  {value: 'LA', label: 'Louisiana'},
  {value: 'ME', label: 'Maine'},
  {value: 'MH', label: 'Marshall Islands'},
  {value: 'MD', label: 'Maryland'},
  {value: 'MA', label: 'Massachusetts'},
  {value: 'MI', label: 'Michigan'},
  {value: 'MN', label: 'Minnesota'},
  {value: 'MS', label: 'Mississippi'},
  {value: 'MO', label: 'Missouri'},
  {value: 'MT', label: 'Montana'},
  {value: 'NE', label: 'Nebraska'},
  {value: 'NV', label: 'Nevada'},
  {value: 'NH', label: 'New Hampshire'},
  {value: 'NJ', label: 'New Jersey'},
  {value: 'NM', label: 'New Mexico'},
  {value: 'NY', label: 'New York'},
  {value: 'NC', label: 'North Carolina'},
  {value: 'ND', label: 'North Dakota'},
  {value: 'MP', label: 'Northern Mariana Islands'},
  {value: 'OH', label: 'Ohio'},
  {value: 'OK', label: 'Oklahoma'},
  {value: 'OR', label: 'Oregon'},
  {value: 'PW', label: 'Palau'},
  {value: 'PA', label: 'Pennsylvania'},
  {value: 'PR', label: 'Puerto Rico'},
  {value: 'RI', label: 'Rhode Island'},
  {value: 'SC', label: 'South Carolina'},
  {value: 'SD', label: 'South Dakota'},
  {value: 'TN', label: 'Tennessee'},
  {value: 'TX', label: 'Texas'},
  {value: 'UT', label: 'Utah'},
  {value: 'VT', label: 'Vermont'},
  {value: 'VI', label: 'Virgin Islands'},
  {value: 'VA', label: 'Virginia'},
  {value: 'WA', label: 'Washington'},
  {value: 'WV', label: 'West Virginia'},
  {value: 'WI', label: 'Wisconsin'},
  {value: 'WY', label: 'Wyoming'},
];

export const optionLength = [
  {value: 1, label: 'general'},
  {
    value: 2,
    label:
      'Evil is the moment when I lack the strength to be true to the Good that compels me.',
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const dogOptions = [
  {id: 1, label: 'Chihuahua'},
  {id: 2, label: 'Bulldog'},
  {id: 3, label: 'Dachshund'},
  {id: 4, label: 'Akita'},
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export const groupedOptions = [
  {
    label: 'Colours',
    options: colourOptions,
  },
  {
    label: 'Flavours',
    options: flavourOptions,
  },
];
