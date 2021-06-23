export const AOTA_APP_OPTIONS = [
  {value: 'docker', label: 'docker'},
  {value: 'compose', label: 'compose'},
  {value: 'application', label: 'application'},
];

export const AOTA_COMMAND_OPTIONS = {
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
    {value: 'update', label: 'update'},
  ]
};

export const AOTA_REBOOT_OPTIONS = [
  {value: 'yes', label: 'Yes'},
  {value: 'no', label: 'No'},
];

export const AOTA_INITIAL_FIELDS_HIDDEN_STATE = {
  app: false,
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
  docker_compose_file: true,
};

export const AOTA_FIELDS_HIDDEN_STATES = {
  docker: {
    import: {
      app: false,
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
      docker_compose_file: true,
    },
    load: {
      app: false,
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
      docker_compose_file: true,
    },
    pull: {
      app: false,
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
      docker_compose_file: true,
    },
    remove: {
      app: false,
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
      docker_compose_file: true,
    },
    stats: {
      app: false,
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
      docker_compose_file: true,
    }
  },
  compose: {
    up: {
      app: false,
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
      docker_compose_file: false,
    },
    down: {
      app: false,
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
      docker_compose_file: true,
    },
    pull: {
      app: false,
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
      docker_compose_file: false,
    },
    list: {
      app: false,
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
      docker_compose_file: true,
    },
    remove: {
      app: false,
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
      docker_compose_file: true,
    }
  },
  application: {
    update: {
      app: false,
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
    },
  },
};

export const SOTA_OPTIONS = [
  {value: 'ubuntu_update', label: 'Ubuntu update'},
  {value: 'mender_update', label: 'Mender update'},
];

export const SOTA_COMMAND_OPTIONS = [
  {value: 'update', label: 'update'},
];

export const SOTA_LOG_TO_FILE_OPTIONS = [
  {value: 'Y', label: 'Yes'},
  {value: 'N', label: 'No'},
];

export const SOTA_INITIAL_FIELDS_HIDDEN_STATE = {
  sota_option: false,
  command: false,
  fetch_link: true,
  log_to_file: false,
  username: true,
  password: true,
};

export const SOTA_FIELDS_HIDDEN_STATES = {
  ubuntu_update: {
    sota_option: false,
    command: false,
    fetch_link: true,
    log_to_file: false,
    username: true,
    password: true,
  },
  mender_update: {
    sota_option: false,
    command: false,
    fetch_link: false,
    log_to_file: false,
    username: false,
    password: false,
  }
};

export const COTA_COMMAND_OPTIONS = [
  {value: 'get', label: 'get'},
  {value: 'load', label: 'load'},
  {value: 'set', label: 'set'},
  {value: 'append', label: 'append'},
  {value: 'remove', label: 'remove'},
];

export const COTA_CONFIGURATION_PATH_OPTIONS = [
  {value: 'dbs', label: 'dbs'},
  {value: 'collectionIntervalSeconds', label: 'collectionIntervalSeconds'},
  {value: 'publishIntervalSeconds', label: 'publishIntervalSeconds'},
  {value: 'maxCacheSize', label: 'maxCacheSize'},
  {value: 'containerHealthIntervalSeconds', label: 'containerHealthIntervalSeconds'},
  {value: 'minStorageMB', label: 'minStorageMB'},
  {value: 'minMemoryMB', label: 'minMemoryMB'},
  {value: 'minPowerPercent', label: 'minPowerPercent'},
  {value: 'sotaSW', label: 'sotaSW'},
  {value: 'dockerBenchSecurityIntervalSeconds', label: 'dockerBenchSecurityIntervalSeconds'},
  {value: 'networkCheck', label: 'networkCheck'},
  {value: 'dbsRemoveImageOnFailedContainer', label: 'dbsRemoveImageOnFailedContainer'},
  {value: 'trustedRepositories', label: 'trustedRepositories'},
  {value: 'orchestratorResponse', label: 'orchestratorResponse'},
  {value: 'ip', label: 'ip'},
  {value: 'token', label: 'token'},
  {value: 'certFile', label: 'certFile'},
  {value: 'ubuntuAptSource', label: 'ubuntuAptSource'},
  {value: 'proceedWithoutRollback', label: 'proceedWithoutRollback'},
];

export const COTA_INITIAL_FIELDS_HIDDEN_STATE = {
  command: false,
  fetch_link: true,
  configurations: true,
  configuration_values: true,
  signature: true,
};

export const COTA_FIELDS_HIDDEN_STATES = {
  get: {
    command: false,
    fetch_link: true,
    configurations: false,
    configuration_values: true,
    signature: true,
  },
  load: {
    command: false,
    fetch_link: false,
    configurations: true,
    configuration_values: true,
    signature: false,
  },
  set: {
    command: false,
    fetch_link: true,
    configurations: false,
    configuration_values: false,
    signature: true,
  },
  append: {
    command: false,
    fetch_link: true,
    configurations: false,
    configuration_values: false,
    signature: true,
  },
  remove: {
    command: false,
    fetch_link: true,
    configurations: false,
    configuration_values: false,
    signature: true,
  },
};

export const POWER_CONTROLS_COMMAND_OPTIONS = [
  {value: 'SHUTDOWN', label: 'SHUTDOWN'},
  {value: 'REBOOT', label: 'REBOOT'},
  {value: 'DECOMMISSION', label: 'DECOMMISSION'},
];

export const DEVICE_VIEW_TAB_OPTIONS = [
  'overview',
  'metrics',
  'aota',
  'fota',
  'sota',
  'cota',
  'command-histories',
  'event-histories',
];
