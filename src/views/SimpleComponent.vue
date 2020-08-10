<template>
  <div>
    <div>{{ greeting }}</div>
    <div>
      The original number is: <strong>{{ myNumber }}</strong>
    </div>
    <div>
      The computed property makes it: <strong>{{ addOne }}</strong>
    </div>
    <div>
      Person name: {{ personName }}
      <button
        class="p-1 text-xs font-bold bg-blue-600 text-white shadow rounded hover:bg-blue-700 mt-8"
        @click="getPerson(1)"
        v-if="!personName"
      >
        Fetch Person
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello World",
      myNumber: 1,
      swPerson: null
    };
  },
  computed: {
    addOne() {
      return this.myNumber + 1;
    },
    personName() {
      if (this.swPerson) {
        return this.swPerson.name;
      }
      return null;
    }
  },
  methods: {
    getPerson(id) {
      fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(data => {
          this.swPerson = data;
        });
    }
  }
};
</script>
