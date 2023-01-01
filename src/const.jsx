import { Button } from "antd";

export const SIDE_BAR_NAV_ITEMS = [
    {'label': 'Stacks', 'key': '/stacks'},
    {'label': 'Stack Components', 'key': '/stack-components'}
];

export const STACK_COLS = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Shared',
      dataIndex: 'is_shared',
      key: 'is_shared',
      render: (is_shared) => (is_shared ? "Shared" : "Not Shared"),
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      ellipsis: true,
    },
    {
      title: 'Date Created',
      dataIndex: 'created',
      key: 'created',
    },
];


export const COMPONENT_COLS = [
  {
    title: 'Component ID',
    dataIndex: 'component_id',
    key: 'component_id',
  },
  {
    title: 'Component Type',
    dataIndex: 'component_type',
    key: 'component_type',
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: (index, record) => (
      <Button type="primary" onClick={() => console.log(record)}>
        View
      </Button>
    ),
  },
];

export const DUMMY_STACK_DATA = [
  {
    "id": "125f317c-1bcf-4497-905d-857b72108af5",
    "created": "2022-11-22T12:34:40",
    "updated": "2022-11-22T12:34:40",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "default",
    "description": "",
    "components": {
      "artifact_store": [
        "0c32dddd-0779-4f12-ab61-a9e88b70d434"
      ],
      "orchestrator": [
        "588be12b-67c5-419b-b042-2886df0fae09"
      ]
    }
  },
  {
    "id": "b293fd97-6987-4235-847e-24813ce71a76",
    "created": "2022-11-24T16:09:12",
    "updated": "2022-11-24T16:09:12",
    "user": "058442b7-5e18-40bc-817c-a13157edf6b4",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "default",
    "description": "",
    "components": {
      "artifact_store": [
        "90657abf-3c69-46b7-b164-f8440dd67520"
      ],
      "orchestrator": [
        "e407afb2-c41c-4034-866e-a1af01ee5091"
      ]
    }
  },
  {
    "id": "4906f671-e531-49d2-ba95-67af668137ac",
    "created": "2022-11-23T17:20:44",
    "updated": "2022-11-24T17:50:36",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "kubeflow_gitflow_stack",
    "description": "",
    "components": {
      "orchestrator": [
        "1f6a4f4b-9da3-4085-bd25-45a7255be88a"
      ],
      "secrets_manager": [
        "676eb0ef-2305-45e1-ae90-e77788926236"
      ],
      "container_registry": [
        "a39279a6-1917-4fcd-b1f8-80ca48007503"
      ],
      "model_deployer": [
        "b8bfc1ec-c458-427c-9028-a04aa230b41c"
      ],
      "data_validator": [
        "c189b257-8f1f-4f32-8fc3-20cc48d32db6"
      ],
      "artifact_store": [
        "d58e6430-d543-42d1-94ab-199c7c8d1708"
      ],
      "experiment_tracker": [
        "f500a2e5-7501-4988-b579-177576bac6e5"
      ]
    }
  },
  {
    "id": "cc7cafef-2008-4645-9766-d17ff2b35438",
    "created": "2022-11-24T11:37:48",
    "updated": "2022-11-24T17:17:10",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "local_gitflow_stack",
    "description": "",
    "components": {
      "artifact_store": [
        "0c32dddd-0779-4f12-ab61-a9e88b70d434"
      ],
      "experiment_tracker": [
        "4bfd3527-8cf3-4618-869a-fdc0fcaaac7e"
      ],
      "orchestrator": [
        "588be12b-67c5-419b-b042-2886df0fae09"
      ],
      "secrets_manager": [
        "676eb0ef-2305-45e1-ae90-e77788926236"
      ],
      "container_registry": [
        "a39279a6-1917-4fcd-b1f8-80ca48007503"
      ],
      "data_validator": [
        "c189b257-8f1f-4f32-8fc3-20cc48d32db6"
      ]
    }
  },
  {
    "id": "939ff7ae-b7cf-444e-a5d3-0e893b3441f5",
    "created": "2022-11-23T16:44:59",
    "updated": "2022-11-23T16:44:59",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "local_stack",
    "description": "",
    "components": {
      "artifact_store": [
        "0c32dddd-0779-4f12-ab61-a9e88b70d434"
      ],
      "orchestrator": [
        "588be12b-67c5-419b-b042-2886df0fae09"
      ]
    }
  },
  {
    "id": "6831c346-dcf7-47a9-b171-1657273da07d",
    "created": "2022-11-25T09:17:36",
    "updated": "2022-11-25T09:22:07",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": false,
    "name": "nba_project_kubeflow_gitflow_stack",
    "description": "",
    "components": {
      "orchestrator": [
        "1f6a4f4b-9da3-4085-bd25-45a7255be88a"
      ],
      "secrets_manager": [
        "676eb0ef-2305-45e1-ae90-e77788926236"
      ],
      "container_registry": [
        "a39279a6-1917-4fcd-b1f8-80ca48007503"
      ],
      "data_validator": [
        "c189b257-8f1f-4f32-8fc3-20cc48d32db6"
      ],
      "artifact_store": [
        "d58e6430-d543-42d1-94ab-199c7c8d1708"
      ],
      "experiment_tracker": [
        "f500a2e5-7501-4988-b579-177576bac6e5"
      ]
    }
  },
  {
    "id": "e9fdbe92-38e7-418d-8f84-1d3567d663e6",
    "created": "2022-11-24T17:06:07",
    "updated": "2022-11-24T17:06:52",
    "user": "ef99200c-807a-4efa-b006-303462d6680c",
    "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    "is_shared": true,
    "name": "vertex_gitflow_stack",
    "description": "",
    "components": {
      "secrets_manager": [
        "5ca75f4e-10a3-435c-96fd-e28fe365a500"
      ],
      "artifact_store": [
        "7894b82b-5523-4e45-83ca-f2c57ba7b6fa"
      ],
      "orchestrator": [
        "a088e255-2d42-4324-8544-e54bcb0f98c4"
      ],
      "data_validator": [
        "ab4e2a49-0634-47ec-a952-5d8cc1dffd75"
      ],
      "container_registry": [
        "c326e7a8-d185-48ea-a85b-3111bf6e4462"
      ],
      "experiment_tracker": [
        "da1429f0-50c8-41a5-bd9c-418d64853a38"
      ]
    }
  }
];