import 'package:flutter/material.dart';

import '../blocs/stories-provider.dart';

class Refresh extends StatelessWidget {
  Widget child;

  Refresh({ this.child });

  Widget build(context) {
    final bloc = StoriesProvider.of(context);
  
    return RefreshIndicator(
      child: child,
      onRefresh: () async {
        await bloc.clearCache();
        await bloc.fetchTopIds();
      },
    );
  }
}